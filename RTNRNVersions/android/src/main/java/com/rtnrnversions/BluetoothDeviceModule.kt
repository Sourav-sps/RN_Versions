package com.rtnrnversions
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice

import android.content.pm.PackageManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Arguments
import com.facebook.react.module.annotations.ReactModule
import com.rtnrnversions.NativeNearByBluetoothSpec

@ReactModule(name = BluetoothDeviceModule.NAME)
class BluetoothDeviceModule(reactContext: ReactApplicationContext) : NativeNearByBluetoothSpec(reactContext) {

    companion object {
        const val NAME = "NearByBluetooth"
    }


    private var reactContext: ReactApplicationContext = reactContext
    private val bluetoothAdapter: BluetoothAdapter? by lazy {
        BluetoothAdapter.getDefaultAdapter()
    }

    override fun getName(): String {
        return NAME
    }

    init {
        this.reactContext = reactContext
    }


    override fun getBluetoothDevices(promise: Promise) {
        if (!this.reactContext.packageManager.hasSystemFeature(PackageManager.FEATURE_BLUETOOTH)) {
            promise.reject("BLUETOOTH_NOT_SUPPORTED", "Bluetooth is not supported on this device")
            return
        }

        if (bluetoothAdapter == null) {
            promise.reject("BLUETOOTH_NOT_AVAILABLE", "Bluetooth is not available on this device")
            return
        }

        if (!bluetoothAdapter!!.isEnabled) {
            promise.reject("BLUETOOTH_NOT_ENABLED", "Bluetooth is not enabled")
            return
        }

        val pairedDevices: Set<BluetoothDevice>? = bluetoothAdapter!!.bondedDevices
        val deviceList = Arguments.createArray()

        pairedDevices?.forEach { device ->
            val deviceInfo = Arguments.createMap()
            deviceInfo.putString("name", device.name ?: "Unknown")
            deviceInfo.putString("address", device.address)
            deviceList.pushMap(deviceInfo)
        }

        promise.resolve(deviceList)
    }
}
