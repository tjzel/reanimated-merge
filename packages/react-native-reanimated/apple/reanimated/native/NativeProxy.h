#if __cplusplus

#import <REAAnimationsManager.h>
#import <REAKeyboardEventObserver.h>
#import <REAModule.h>
#import <REANodesManager.h>
#import <RNReanimated/NativeReanimatedModule.h>
#import <React/RCTEventDispatcher.h>
#import <ReanimatedSensorContainer.h>
#include <memory>

namespace reanimated {

static inline bool getIsReducedMotion();

std::shared_ptr<reanimated::NativeReanimatedModule> createReanimatedModule(
    REAModule *reaModule,
    RCTBridge *bridge,
    const std::shared_ptr<facebook::react::CallInvoker> &jsInvoker);

#if REACT_NATIVE_MINOR_VERSION >= 74 && defined(RCT_NEW_ARCH_ENABLED)
std::shared_ptr<reanimated::NativeReanimatedModule>
createReanimatedModuleBridgeless(RCTModuleRegistry *moduleRegistry);
#endif // REACT_NATIVE_MINOR_VERSION >= 74 && defined(RCT_NEW_ARCH_ENABLED)

void commonInit(
    REAModule *reaModule,
    std::shared_ptr<NativeReanimatedModule> nativeReanimatedModule);

#ifdef RCT_NEW_ARCH_ENABLED
// nothing
#else // RCT_NEW_ARCH_ENABLED
void setupLayoutAnimationCallbacks(
    std::shared_ptr<NativeReanimatedModule> nativeReanimatedModule,
    REAAnimationsManager *animationsManager);
#endif // RCT_NEW_ARCH_ENABLED

} // namespace reanimated

#endif //__cplusplus