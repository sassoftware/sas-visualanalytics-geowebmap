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

import { resolve } from "esri/core/promiseUtils";
import { initializeI18N } from "sas/i18n/resources";

class TestUtil {

    static InitializeI18NOnce(): Promise<any> {
        if (!TestUtil._i18nInitialized) {
            return initializeI18N().then(() => { TestUtil._i18nInitialized = true; });
        }
        else {
            return resolve();
        }
    }

    private static _i18nInitialized: boolean = false;

}
export default TestUtil;