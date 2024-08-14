package com.swmansion.reanimated;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;

// TODO: is it needed?

class ReaCompatibility {
  public ReaCompatibility(ReactApplicationContext reactApplicationContext) {}

  public void registerFabricEventListener(NodesManager nodesManager) {}

  public void synchronouslyUpdateUIProps(int viewTag, ReadableMap uiProps) {}
}
