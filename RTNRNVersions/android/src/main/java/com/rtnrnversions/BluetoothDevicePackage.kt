package com.rtnrnversions
import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.bridge.NativeModule;

class BluetoothDevicePackage: TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == BluetoothDeviceModule.NAME) {
            BluetoothDeviceModule(reactContext)
        } else {
            null
        }
    }


    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                BluetoothDeviceModule.NAME to ReactModuleInfo(
                    BluetoothDeviceModule.NAME,
                    BluetoothDeviceModule.NAME,
                    false, // canOverrideExistingModule
                    false, // needsEagerInit
                    true,  // hasConstants
                    false, // isCxxModule
                    true   // isTurboModule
                )
            )
        }
    }

}