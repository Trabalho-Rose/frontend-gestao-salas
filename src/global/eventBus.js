import mitt from "mitt";

export const ACTIONS = {
    SNACKBAR: 'snackbar',
};

const EventBus = mitt();

export { EventBus };