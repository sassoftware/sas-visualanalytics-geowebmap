/*
Copyright 2018 SAS Institute Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export function initializeI18N(): Promise<any> {
    return i18next
        .use(LanguageDetector)
        .use(Backend)
        .init({
            // debug: true,
            fallbackLng: 'en',
            backend: {
                loadPath: 'i18n/{{lng}}.json'
            }
        });
}

export function l(key: string, ...substitutionArguments: string[]): string {
    const subs: any = {};
    (substitutionArguments || []).forEach((value: string, i: number) => {
        subs[i] = value;
    });
    return i18next.t(key, subs);
}