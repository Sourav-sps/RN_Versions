import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import {TurboModuleRegistry} from 'react-native'
// the TurboModule type defines the base interface for all Turbo Modules and 
//the TurboModuleRegistry JavaScript module contains functions for loading Turbo Modules.
export interface Spec extends TurboModule{
    getBluetoothDevices():Promise<string[]>

}

export default TurboModuleRegistry.get<Spec>('NearByBluetooth') as Spec || null;

