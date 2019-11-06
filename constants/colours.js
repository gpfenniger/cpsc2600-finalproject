const colours = {
    /* Polar Night                                   */
    nord0: '#2e3440' /* dark background              */,
    nord1: '#3b4252' /* focused UI elements          */,
    nord2: '#434c5e' /* highlighting                 */,
    nord3: '#4c566a' /* comments, less attention     */,
    /* Snow Storm                                    */
    nord4: '#d8dee9' /* dark to bright background    */,
    nord5: '#e5e9f0' /* highlight                    */,
    nord6: '#eceff4' /* bright to dark background    */,
    /* Frost                                         */
    nord7: '#8fbcbb' /* adjacent to nord8            */,
    nord8: '#88c0d0' /* primary UI                   */,
    nord9: '#81a1c1' /* secondary UI                 */,
    nord10: '#5e81ac' /* tertiary UI                 */,
    /* Aurora                                        */
    nord11: '#bf616a' /* error                       */,
    nord12: '#d08770' /* dangerous                   */,
    nord13: '#ebcb8b' /* warning                     */,
    nord14: '#a3be8c' /* success                     */,
    nord15: '#b48ead' /* special                     */
};

export default {
    colourFromProps: props => {
        if (props.darkest) return colours.nord0;
        else if (props.darker) return colours.nord1;
        else if (props.dark) return colours.nord2;
        else if (props.comment) return colours.nord3;
        else if (props.light) return colours.nord4;
        else if (props.lighter) return colours.nord5;
        else if (props.lightest) return colours.nord6;
        else if (props.compliment) return colours.nord7;
        else if (props.primary) return colours.nord8;
        else if (props.secondary) return colours.nord9;
        else if (props.tertiary) return colours.nord10;
        else if (props.error) return colours.nord11;
        else if (props.dangerous) return colours.nord12;
        else if (props.warning) return colours.nord13;
        else if (props.success) return colours.nord14;
        else if (props.special) return colours.nord15;
        return colours.nord4;
    }
};
