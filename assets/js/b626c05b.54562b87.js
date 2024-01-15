"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9070],{78954:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),i=n(67177),o=n(14779),r=n(72862),s=n(10758),l=n(35842),u=n(10919),c=n(49638);const d={code:"function anonymous(){const{withSpring,translateX}=this.__closure;return{transform:[{translateX:withSpring(translateX.value*2)}]};}"};function m(){const e=(0,s.y)(0),t=(0,l.l)(function(){const t=()=>({transform:[{translateX:(0,u.V)(2*e.value)}]});return t.__closure={withSpring:u.V,translateX:e},t.__initData=d,t.__workletHash=0xe181fe145b8,t}());return a.createElement(a.Fragment,null,a.createElement(c.n,{style:[p.box,t]}),a.createElement(i.Z,{style:p.container},a.createElement(o.Z,{onPress:()=>{e.value+=50},title:"Click me"})))}const p=r.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginVertical:50}})},98388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),o=n(78954),r=n(38035);const s={sidebar_position:2},l="useAnimatedStyle",u={unversionedId:"core/useAnimatedStyle",id:"core/useAnimatedStyle",title:"useAnimatedStyle",description:"useAnimatedStyle lets you create a styles object, similar to StyleSheet styles, which can be animated using shared values.",source:"@site/docs/core/useAnimatedStyle.mdx",sourceDirName:"core",slug:"/core/useAnimatedStyle",permalink:"/react-native-reanimated/docs/core/useAnimatedStyle",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/useAnimatedStyle.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/core/useSharedValue"},next:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/core/useAnimatedProps"}},c={},d=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>updater</code>",id:"updater",level:4},{value:"<code>dependencies</code> <Optional/>",id:"dependencies-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=m("Optional"),y=m("InteractiveExample"),h=m("Indent"),f={toc:d},g="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useanimatedstyle"},"useAnimatedStyle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," lets you create a styles object, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," styles, which can be animated using ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values"),"."),(0,i.kt)("p",null,"Styles defined using ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," have to be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," property of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component"),". Styles are automatically updated whenever an associated shared value or React state changes."),(0,i.kt)("p",null,"In contrast to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animations-in-inline-styling"},"inline styling"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," allows to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/animating-styles-and-props/#animating-styles"},"access values stored in shared values")," in the styles object it defines."),(0,i.kt)("p",null,"For animating properties use ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedProps"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," instead."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useAnimatedStyle } from 'react-native-reanimated';\n\nfunction App() {\n  // highlight-next-line\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      opacity: sv.value ? 1 : 0,\n    };\n    // highlight-next-line\n  });\n\n  // highlight-next-line\n  return <Animated.View style={[styles.box, animatedStyles]} />;\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type DefaultStyle = ViewStyle | ImageStyle | TextStyle;\ntype DependencyList = Array<unknown> | undefined;\n\nexport function useAnimatedStyle<Style extends DefaultStyle>(\n  updater: () => Style,\n  dependencies?: DependencyList | null\n): Style;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"updater"},(0,i.kt)("inlineCode",{parentName:"h4"},"updater")),(0,i.kt)("p",null,"A function returning an object with style properties you want to animate. You can animate any style property available in React Native."),(0,i.kt)("h4",{id:"dependencies-"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ",(0,i.kt)(p,{mdxType:"Optional"})),(0,i.kt)("p",null,"An optional array of dependencies."),(0,i.kt)("p",null,"Only relevant when using Reanimated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support#web-without-the-babel-plugin"},"without the Babel plugin on the Web"),"."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," returns an animated style object which has to be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," property of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," that you want to animate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," mimics the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," as much as possible. ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," callback returns a value that looks like a regular style object in which you can also use shared values."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(y,{src:r.Z,component:(0,i.kt)(o.Z,{mdxType:"AnimatingStyles"}),showCode:!0,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutating shared values in ",(0,i.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle"),"'s callback is an undefined behavior which may lead to infinite loops.")),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const sv = useSharedValue(0);\n  const animatedStyles = useAnimatedStyle(() => {\n    // highlight-next-line\n    sv.value = withTiming(1); // Don't do this!\n    return { opacity: sv.value };\n  });\n}\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can apply the value returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," only to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," components. Passing the animated styles to non-animated component will result in an error.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only define the dynamic part of your styles with ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and keep the static ones separately using ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," API or (if you really have to) with inline styles. That way you avoid lots of unnecessary style recalculations. Static and dynamic styles can be easily merged using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," syntax:"))),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const animatedStyles = useAnimatedStyle(() => ({\n    offset: sv.value,\n  }));\n\n  // highlight-next-line\n  return <Animated.View style={[styles.box, animatedStyles]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n  },\n});\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can share animated styles between components to avoid code duplication.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The callback passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," is first run on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," and immediately after on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". This may cause an error if you write your code as if it's running on UI thread only. To avoid this, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"global._WORKLET")," variable to check if the code is running on the UI thread:"))),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const animatedStyles = useAnimatedStyle(() => {\n    // highlight-next-line\n    if (global._WORKLET) {\n      // UI thread only code\n    } else {\n      // JS thread fallback code\n    }\n  });\n}\n"))),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}v.isMDXComponent=!0},38035:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { Button, View, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const translateX = useSharedValue(0);\n\n  const handlePress = () => {\n    translateX.value += 50;\n  };\n\n  // highlight-start\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: withSpring(translateX.value * 2) }],\n  }));\n  // highlight-end\n\n  return (\n    <>\n      {/* highlight-next-line */}\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <View style={styles.container}>\n        <Button onPress={handlePress} title=\"Click me\" />\n      </View>\n    </>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 50,\n  },\n});\n"},10919:(e,t,n)=>{n.d(t,{V:()=>o});var a=n(76933);function i(e,t,n){if(t.skipAnimation)return 0;const{stiffness:a,dampingRatio:i,restSpeedThreshold:o,duration:r}=t;return function(e){let{min:t,max:n,func:a,maxIterations:i=20}=e,o=i,r=(n+t)/2;for(;Math.abs(a(r))>5e-5&&o>0;)o-=1,a(r)<0?t=r:n=r,r=(t+n)/2;return r}({min:0,max:100,func:t=>{const s=(t*n*n+a*e*e)/(Math.exp(1-.5*i)*a);return-2*t/(2*i*Math.sqrt(a*t))*1e3*Math.log(.01*o/s)-r}})}const o=(e,t,n)=>(0,a.oF)(e,(()=>{const o={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),skipAnimation:!1};return o.skipAnimation=!function(e){let t="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((n=>{const a=e[n];a<=0&&(t+=`, ${n} must be grater than zero but got ${a}`)})),e.duration<0&&(t+=`, duration can't be negative, got ${e.duration}`),""!==t&&console.warn("[Reanimated] Invalid spring config"+t),""===t}(o),0===o.duration&&(o.skipAnimation=!0),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:i}=e,r=t-a;if(o.useDuration&&r>=o.duration)return e.current=n,e.lastTimestamp=0,!0;if(o.skipAnimation)return e.current=n,e.lastTimestamp=0,!0;const{lastTimestamp:s,velocity:l}=e,u=Math.min(t-s,64);e.lastTimestamp=t;const c=u/1e3,d=-l,m=n-i,{zeta:p,omega0:y,omega1:h}=e,{position:f,velocity:g}=p<1?function(e,t){const{toValue:n,current:a,velocity:i}=e,{zeta:o,t:r,omega0:s,omega1:l}=t,u=-i,c=n-a,d=Math.sin(l*r),m=Math.cos(l*r),p=Math.exp(-o*s*r),y=p*(d*((u+o*s*c)/l)+c*m);return{position:n-y,velocity:o*s*y-p*(m*(u+o*s*c)-l*c*d)}}(e,{zeta:p,v0:d,x0:m,omega0:y,omega1:h,t:c}):function(e,t){const{toValue:n}=e,{v0:a,x0:i,omega0:o,t:r}=t,s=Math.exp(-o*r);return{position:n-s*(i+(a+o*i)*r),velocity:s*(a*(r*o-1)+r*i*o*o)}}(e,{v0:d,x0:m,omega0:y,t:c});e.current=f,e.velocity=g;const{isOvershooting:v,isVelocity:k,isDisplacement:b}=function(e,t){const{toValue:n,velocity:a,startValue:i,current:o}=e;return{isOvershooting:!!t.overshootClamping&&(o>n&&i<n||o<n&&i>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-o)<t.restDisplacementThreshold}}(e,o),S=v||k&&b;return!(o.useDuration||!S)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let r=o.mass;const s=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),l=o.duration,u=s?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(s?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+o.velocity)||0:o.velocity||0,s)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(o.useDuration){const t=s?l-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):l;o.duration=t,r=i(u,o,e.velocity)}const{zeta:t,omega0:n,omega1:c}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,i=Math.sqrt(n/e);return{zeta:a,omega0:i,omega1:i*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,i=e/(2*Math.sqrt(a*n)),o=Math.sqrt(a/n);return{zeta:i,omega0:o,omega1:o*Math.sqrt(1-i**2)}}}(r,o);e.zeta=t,e.omega0=n,e.omega1=c}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=s&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:o.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.uh)(o.reduceMotion)}}))},49638:(e,t,n)=>{n.d(t,{n:()=>i});var a=n(67177);const i=(0,n(33705).F)(a.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>f});var a=n(67294),i=n(96085),o=n(97604),r=n(49402),s=n(76933),l=n(10758),u=n(40093),c=n(41956),d=n(83442);const m=(0,d.Wr)();function p(e,t,n,a){if(Array.isArray(t)&&t.forEach(((t,i)=>{p(e,t,n&&n[i],a&&a[i])})),"object"==typeof t&&t.onFrame){const i=t;let o=i.current;void 0!==a&&("object"==typeof a?void 0!==a.value?o=a.value:void 0!==a.onFrame&&(void 0!==(null==n?void 0:n.current)?o=n.current:void 0!==(null==a?void 0:a.current)&&(o=a.current)):o=a),i.callStart=e=>{i.onStart(i,o,e,n)},i.callStart(e),i.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((i=>p(e,t[i],n&&n[i],a&&a[i])))}function y(e,t,n,a,i){if(!i.value)return!0;if(Array.isArray(e)){a[n]=[];let o=!0;return e.forEach(((e,r)=>{y(e,t,r,a[n],i)||(o=!1)})),o}if("object"==typeof e&&e.onFrame){let i=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),i=e.onFrame(e,t),e.timestamp=t,i&&(e.finished=!0,e.callback&&e.callback(!0))),a[n]=e.current,i}if("object"==typeof e){a[n]={};let o=!0;return Object.keys(e).forEach((r=>{y(e[r],t,r,a[n],i)||(o=!1)})),o}return a[n]=e,!0}function h(e,t){if(Array.isArray(e))for(const n of e)h(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))h(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function f(e,t,f){let g=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const v=(0,c.H)(),k=(0,a.useRef)();let b=Object.values(e.__closure??{});var S;m&&(!b.length&&null!==(S=t)&&void 0!==S&&S.length&&(b=t));const A=f?Array.isArray(f)?f:[f]:[],w=f?(0,u.Nq)(A):null,N=(0,l.y)(!0),x=(0,a.useRef)({});if(t?t.push(e.__workletHash):t=[...b,e.__workletHash],w&&t.push(w),!k.current){const t=(0,s.AX)(e);(0,u.Dl)(t),k.current={initial:{value:t,updater:e},remoteState:(0,i.I1)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,c.G)()}}const{initial:C,remoteState:R,viewDescriptors:T}=k.current,j=T.shareableViewDescriptors,P=m?v:void 0;return t.push(j),(0,a.useEffect)((()=>{let t,a=e;f&&(a=()=>{const t=e();return A.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,a,i,o,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];const c=a.animations??{},d=t()??{},m=a.last;let h,f=!1;Object.keys(c).forEach((e=>{const t=d[e];(0,u.mE)(t)||delete c[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,u.mE)(t)&&(h=n.g.__frameTimestamp||_getAnimationTimestamp(),p(h,t,c[e],m[e]),c[e]=t,f=!0)})),f?(a.animations=c,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,function t(n){const{animations:u,last:c,isAnimationCancelled:d}=a;if(d)return void(a.isAnimationRunning=!1);const m={};let p=!0;Object.keys(u).forEach((e=>{y(u[e],n,e,m,o)?(c[e]=m[e],delete u[e]):p=!1})),Object.keys(m).length&&(0,r.R)(e,m,i,s,l),p?a.isAnimationRunning=!1:requestAnimationFrame(t)}(h))):(a.isAnimationCancelled=!0,a.animations=[]),a.last=d,(0,u.wU)(m,d)||(0,r.R)(e,d,i,s,l)}(j,e,R,P,N,x,A)}:()=>{!function(e,t,a,i,o){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=a.animations??{},c=t()??{},d=a.last,m={};let h,f=!1,g=!1;for(const r in c){const e=c[r];(0,u.mE)(e)?(h=n.g.__frameTimestamp||_getAnimationTimestamp(),p(h,e,l[r],d[r]),l[r]=e,f=!0):(g=!0,m[r]=e,delete l[r])}if(f){const t=n=>{const{animations:s,last:l,isAnimationCancelled:u}=a;if(u)return void(a.isAnimationRunning=!1);const c={};let d=!0;for(const e in s)y(s[e],n,e,c,o)?(l[e]=c[e],delete s[e]):d=!1;c&&(0,r.Z)(e,c,i),d?a.isAnimationRunning=!1:requestAnimationFrame(t)};a.animations=l,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,t(h)),g&&(0,r.Z)(e,m,i)}else a.isAnimationCancelled=!0,a.animations=[],(0,u.wU)(d,c)||(0,r.Z)(e,c,i,s);a.last=c}(j,a,R,P,N,g)};const i=(0,o.R)(t,b);return()=>{(0,o.B)(i)}}),t),(0,a.useEffect)((()=>(N.value=!0,()=>{N.value=!1})),[]),h(C.value),(0,d.V5)()?{viewDescriptors:T,initial:C,viewsRef:v,animatedStyle:x}:{viewDescriptors:T,initial:C,viewsRef:v}}},40093:(e,t,n)=>{function a(e){return Object.values(e).reduce(((e,t)=>e+t.__workletHash.toString()),"")}function i(e,t){const n=Object.values(t).filter((e=>void 0!==e));return e?e.push(a(n)):e=n.map((e=>({workletHash:e.__workletHash,closure:e.__closure}))),e}function o(e,t){const n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};return function(e,t){if(!e||!t||t.length!==e.length)return!1;for(let a=0;a<t.length;++a)if(!n(e[a],t[a]))return!1;return!0}(e,t)}function r(e){return Array.isArray(e)?e.some(r):"object"==typeof e&&null!==e&&(void 0!==e.onFrame||Object.values(e).some(r))}function s(e,t){const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(let i=0;i<n.length;i++)if(e[n[i]]!==t[n[i]])return!1;return!0}function l(e){if("object"!=typeof e)throw new Error(`[Reanimated] \`useAnimatedStyle\` has to return an object, found ${typeof e} instead.`);if(Array.isArray(e))throw new Error("[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.")}n.d(t,{C1:()=>i,Dl:()=>l,Nq:()=>a,mE:()=>r,qD:()=>o,wU:()=>s})},14779:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),i=n(72862),o=n(83117),r=n(80102),s=n(16528),l=n(94119),u=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,i=e.delayPressIn,d=e.delayPressOut,p=e.delayLongPress,y=e.disabled,h=e.focusable,f=e.onLongPress,g=e.onPress,v=e.onPressIn,k=e.onPressOut,b=e.rejectResponderTermination,S=e.style,A=(0,r.Z)(e,c),w=(0,a.useRef)(null),N=(0,s.Z)(t,w),x=(0,a.useState)("0s"),C=x[0],R=x[1],T=(0,a.useState)(null),j=T[0],P=T[1],D=(0,a.useCallback)(((e,t)=>{P(e),R(t?t/1e3+"s":"0s")}),[P,R]),_=(0,a.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),E=(0,a.useCallback)((e=>{D(null,e)}),[D]),V=(0,a.useMemo)((()=>({cancelable:!b,disabled:y,delayLongPress:p,delayPressStart:i,delayPressEnd:d,onLongPress:f,onPress:g,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;_(t?0:150),null!=v&&v(e)},onPressEnd(e){E(250),null!=k&&k(e)}})),[p,i,d,y,f,g,v,k,b,_,E]),O=(0,l.Z)(w,V);return a.createElement(u.Z,(0,o.Z)({},A,O,{accessibilityDisabled:y,focusable:!y&&!1!==h,pointerEvents:y?"none":void 0,ref:N,style:[m.root,!y&&m.actionable,S,null!=j&&{opacity:j},{transitionDuration:C}]}))}var m=i.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(d));p.displayName="TouchableOpacity";const y=p;var h=n(24404),f=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,o=e.disabled,r=e.onPress,s=e.testID,l=e.title;return a.createElement(y,{accessibilityLabel:n,accessibilityRole:"button",disabled:o,focusable:!o,onPress:r,ref:t,style:[g.button,i&&{backgroundColor:i},o&&g.buttonDisabled],testID:s},a.createElement(h.Z,{style:[g.text,o&&g.textDisabled]},l))}));f.displayName="Button";var g=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const v=f}}]);