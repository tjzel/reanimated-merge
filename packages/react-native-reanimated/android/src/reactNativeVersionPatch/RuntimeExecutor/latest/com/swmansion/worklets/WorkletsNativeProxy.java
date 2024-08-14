package com.swmansion.worklets;

import androidx.annotation.OptIn;
import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.queue.MessageQueueThread;
import com.facebook.react.common.annotations.FrameworkAPI;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;
import com.facebook.soloader.SoLoader;
import java.util.Objects;
import com.facebook.react.bridge.RuntimeExecutor;

/**
 * @noinspection JavaJniMissingFunction
 */
public class WorkletsNativeProxy extends WorkletsNativeProxyCommon {
  @DoNotStrip @SuppressWarnings("unused") private final HybridData mHybridData;

  static {
    SoLoader.loadLibrary("worklets");
  }

  public @OptIn(markerClass = FrameworkAPI.class) WorkletsNativeProxy(
      ReactApplicationContext context,
      String valueUnpackerCode) {
    super(context);
    ReanimatedMessageQueueThread messageQueueThread =
      new ReanimatedMessageQueueThread();
    if (context.isBridgeless()) {
      var runtimeExecutor = context.getCatalystInstance().getRuntimeExecutor();
      mHybridData = initHybridBridgeless(
          Objects.requireNonNull(context.getJavaScriptContextHolder()).get(),
          runtimeExecutor,
          mAndroidUIScheduler,
          messageQueueThread,
          valueUnpackerCode);
    } else {
      CallInvokerHolderImpl holder =
          (CallInvokerHolderImpl)context.getCatalystInstance()
              .getJSCallInvokerHolder();
      mHybridData = initHybrid(
          Objects.requireNonNull(context.getJavaScriptContextHolder()).get(),
          holder,
          mAndroidUIScheduler,
          messageQueueThread,
          valueUnpackerCode);
    }
  }

  private native HybridData initHybrid(
      long jsContext,
      CallInvokerHolderImpl jsCallInvokerHolder,
      AndroidUIScheduler androidUIScheduler,
      MessageQueueThread messageQueueThread,
      String valueUnpackerCode);

  private native HybridData initHybridBridgeless(
      long jsContext,
      RuntimeExecutor runtimeExecutor,
      AndroidUIScheduler androidUIScheduler,
      MessageQueueThread messageQueueThread,
      String valueUnpackerCode);

  @Override
  protected HybridData getHybridData() {
    return mHybridData;
  }
}
