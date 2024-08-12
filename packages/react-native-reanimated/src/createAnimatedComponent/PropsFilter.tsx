'use strict';

import type { StyleProps } from '../commonTypes';
import { isSharedValue } from '../isSharedValue';
import { isChromeDebugger } from '../PlatformChecker';
import { initialUpdaterRun } from '../animation';
import { hasInlineStyles, getInlineStyle } from './InlinePropManager';
import type {
  AnimatedComponentProps,
  AnimatedProps,
  InitialComponentProps,
  IAnimatedComponentInternal,
  IPropsFilter,
} from './commonTypes';
import { flattenArray, has } from './utils';
import { StyleSheet } from 'react-native';
import { isWorkletEventHandler } from '../hook/commonTypes';

function dummyListener() {
  // empty listener we use to assign to listener properties for which animated
  // event is used.
}

export class PropsFilter implements IPropsFilter {
  private _initialStyle = {};

  public filterNonAnimatedProps(
    component: React.Component<unknown, unknown> & IAnimatedComponentInternal
  ): Record<string, unknown> {
    const inputProps =
      component.props as AnimatedComponentProps<InitialComponentProps>;
    const props: Record<string, unknown> = {};
    for (const key in inputProps) {
      const value = inputProps[key];
      if (key === 'style') {
        const styleProp = inputProps.style;
        const styles = flattenArray<StyleProps>(styleProp ?? []);
        const processedStyle: StyleProps = styles.map((style) => {
          if (style && style.viewDescriptors) {
            // this is how we recognize styles returned by useAnimatedStyle
            if (component._isFirstRender) {
              this._initialStyle = {
                ...style.initial.value,
                ...this._initialStyle,
                ...initialUpdaterRun<StyleProps>(style.initial.updater),
              };
            }
            return this._initialStyle;
          } else if (hasInlineStyles(style)) {
            return getInlineStyle(style, component._isFirstRender);
          } else {
            return style;
          }
        });
        props[key] = StyleSheet.flatten(processedStyle);
      } else if (key === 'animatedProps') {
        const animatedProp = inputProps.animatedProps as Partial<
          AnimatedComponentProps<AnimatedProps>
        >;
        if (animatedProp.initial !== undefined) {
          Object.keys(animatedProp.initial.value).forEach((initialValueKey) => {
            props[initialValueKey] =
              animatedProp.initial?.value[initialValueKey];
          });
        }
      } else if (isWorkletEventHandler(value)) {
        const handler = value.workletEventHandler;
        const isWebHandler = has('listeners', handler);
        const hasReactHandlers = Object.keys(handler.reactHandlers).length > 0;

        if (hasReactHandlers && isWebHandler) {
          // on web, our and JS handlers are merged in listeners object
          Object.keys(handler.listeners).forEach((eventName) => {
            props[eventName] = handler.listeners[eventName];
          });
        } else if (hasReactHandlers && !isWebHandler) {
          // on mobile platforms, we just set the JS handlers to the props
          Object.keys(handler.reactHandlers).forEach((eventName) => {
            props[eventName] = handler.reactHandlers[eventName];
          });
        } else {
          if (handler.eventNames.length > 0) {
            handler.eventNames.forEach((eventName) => {
              props[eventName] = isWebHandler
                ? (handler.listeners as Record<string, unknown>)[eventName]
                : dummyListener;
            });
          } else {
            props[key] = dummyListener;
          }
        }
      } else if (isSharedValue(value)) {
        if (component._isFirstRender) {
          props[key] = value.value;
        }
      } else if (key !== 'onGestureHandlerStateChange' || !isChromeDebugger()) {
        props[key] = value;
      }
    }
    return props;
  }
}
