import {createContext, useEffect, useState} from 'react';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
  openSettings
} from 'react-native-permissions';
import React from 'react';
import {AppState, Platform} from 'react-native';
export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationpermission: () => void;
};
export const permissionsContext = createContext({
  //todo: define what will be exported
} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionInitState);
  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return ;
        askLocationPermission();
      
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };
  const checkLocationpermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    if(permissionStatus==='blocked'){
      openSettings();
    }
    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };
  return (
    <permissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationpermission,
      }}
    >
      {children}
    </permissionsContext.Provider>
  );
};
