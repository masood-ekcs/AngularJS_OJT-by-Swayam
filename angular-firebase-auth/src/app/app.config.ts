import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyCajc5BbDpjNP-0T3TpDbEsXofe97NjAHk',
          authDomain: 'ekcs-ecomm.firebaseapp.com',
          projectId: 'ekcs-ecomm',
          storageBucket: 'ekcs-ecomm.appspot.com',
          messagingSenderId: '864459357602',
          appId: '1:864459357602:web:432aee21f96f181038c6fb',
          measurementId: 'G-CYY5JN932Y',
        })
      ),
      provideAuth(() => getAuth())
    ),
  ],
};
