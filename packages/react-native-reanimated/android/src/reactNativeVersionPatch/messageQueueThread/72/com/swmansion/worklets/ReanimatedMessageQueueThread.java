package com.swmansion.worklets;

import com.facebook.proguard.annotations.DoNotStrip;

@DoNotStrip
public class ReanimatedMessageQueueThread extends ReanimatedMessageQueueThreadBase {
  @Override
  public boolean runOnQueue(Runnable runnable) {
    return messageQueueThread.runOnQueue(runnable);
  }
}