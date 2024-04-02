package com.rtnrnversions
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtnrnversions.NativeGetRNVersionsSpec
import com.facebook.react.module.annotations.ReactModule
import android.os.Build


@ReactModule(name = DeviceModule.NAME)
class DeviceModule(reactContext: ReactApplicationContext) : NativeGetRNVersionsSpec(reactContext) {

  override fun getName() = NAME

  override fun getDeviceModel(promise: Promise) {
    val manufacturer: String = Build.MANUFACTURER

    val model: String = Build.MODEL
    promise.resolve(manufacturer + model)
  }

  companion object {
    const val NAME = "RTNRNVersions"
  }
}