#import <React/RCTBridge+Private.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTFabricSurface.h>
#import <React/RCTScheduler.h>
#import <React/RCTSurface.h>
#import <React/RCTSurfacePresenter.h>
#import <React/RCTSurfacePresenterBridgeAdapter.h>
#import <React/RCTSurfaceView.h>
#if REACT_NATIVE_MINOR_VERSION < 73
#import <React/RCTRuntimeExecutorFromBridge.h>
#endif // REACT_NATIVE_MINOR_VERSION < 73
#endif // RCT_NEW_ARCH_ENABLED

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNReanimated/REAInitializerRCTFabricSurface.h>
#endif // RCT_NEW_ARCH_ENABLED

#import <RNReanimated/REAIOSUIScheduler.h>
#import <RNReanimated/REAMessageThread.h>
#import <RNReanimated/REANodesManager.h>
#import <RNReanimated/REAUIKit.h>
#import <RNReanimated/RNRuntimeDecorator.h>
#import <RNReanimated/ReanimatedJSIUtils.h>
#import <RNReanimated/SingleInstanceChecker.h>
#import <RNReanimated/WorkletRuntime.h>
#import <RNReanimated/WorkletRuntimeCollector.h>
#import <RNReanimated/WorkletsModule.h>

#if __has_include(<UIKit/UIAccessibility.h>)
#import <UIKit/UIAccessibility.h>
#endif // __has_include(<UIKit/UIAccessibility.h>)

using namespace facebook::react;
using namespace reanimated;

@interface RCTBridge (JSIRuntime)
- (void *)runtime;
@end

@interface RCTBridge (RCTTurboModule)
- (std::shared_ptr<facebook::react::CallInvoker>)jsCallInvoker;
- (void)_tryAndHandleError:(dispatch_block_t)block;
@end

@implementation WorkletsModule {
#ifndef NDEBUG
  SingleInstanceChecker<REAModule> singleInstanceChecker_;
#endif // NDEBUG
  std::shared_ptr<CommonWorkletsModule> commonWorkletsModule_;
  bool _isBridgeless;
}

- (std::shared_ptr<CommonWorkletsModule>)getCommonWorkletsModule
{
  return commonWorkletsModule_;
}

@synthesize moduleRegistry = _moduleRegistry;

RCT_EXPORT_MODULE(WorkletsModule);

- (void)invalidate
{
  [super invalidate];
}

- (dispatch_queue_t)methodQueue
{
  // This module needs to be on the same queue as the UIManager to avoid
  // having to lock `_operations` and `_preOperations` since `uiManagerWillPerformMounting`
  // will be called from that queue.
  return RCTGetUIManagerQueue();
}

- (void)setBridge:(RCTBridge *)bridge
{
  [super setBridge:bridge];
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(installTurboModule : (nonnull NSString *)valueUnpackerCode)
{
  facebook::jsi::Runtime *jsiRuntime = [self.bridge respondsToSelector:@selector(runtime)]
      ? reinterpret_cast<facebook::jsi::Runtime *>(self.bridge.runtime)
      : nullptr;
  jsi::Runtime &rnRuntime = *jsiRuntime;

  std::shared_ptr<UIScheduler> uiScheduler = std::make_shared<REAIOSUIScheduler>();
  std::shared_ptr<JSScheduler> jsScheduler = std::make_shared<JSScheduler>(rnRuntime, self.bridge.jsCallInvoker);
  auto jsQueue = std::make_shared<REAMessageThread>([NSRunLoop currentRunLoop], ^(NSError *error) {
    throw error;
  });
  constexpr auto isBridgeless = false;
  constexpr auto isReducedMotion = false;

  //  CommonWorkletsModule(
  //      jsi::Runtime &rnRuntime,
  //      const std::shared_ptr<JSScheduler> &jsScheduler,
  //      const std::shared_ptr<MessageQueueThread> &jsQueue,
  //      const std::shared_ptr<UIScheduler> &uiScheduler,
  //      const std::string &valueUnpackerCode,
  //      const bool isBridgeless,
  //                       const bool isReducedMotion);

  commonWorkletsModule_ = std::make_shared<CommonWorkletsModule>(
      rnRuntime,
      jsScheduler,
      jsQueue,
      uiScheduler,
      std::string([valueUnpackerCode UTF8String]),
      isBridgeless,
      isReducedMotion);

  return @YES;
}

@end
