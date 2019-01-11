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

/**
 * Encapsulate the logic for controlling animations.  Asserts that an animation will
 * control opacity over a date range.  Does not currently work with choropleths or
 * SceneViews.
 */
class AnimationHelper {
    constructor(animationPeriod:any) {
    }
    initializeAnimation(sasLayer:any) {
    }
    initializeAnimationData(event:any, animationColumnLabel:any) {
        // MAP TODO
        return;
    }
    generateSampleAnimationData(result:any, colorColumnLabel:any, sizeColumnLabel:any, animationColumnLabel:any):void {
        // MAP TODO
        return;
    }
}
export default AnimationHelper;
