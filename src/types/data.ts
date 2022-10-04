export type Data<T, P = undefined> =
    | InitialState
    | LoadingState<T, P>
    | LoadedState<T, P>
    | ErroredState<P>;

interface InitialState {
    isLoading: false;
    isLoaded: false;
    isErrored: false;
    data: null;
    props?: undefined;
}

interface LoadingState<T, P> {
    isLoading: true;
    isLoaded: false;
    isErrored: false;
    data: T | null;
    props?: P | undefined;
}

interface LoadedState<T, P> {
    isLoading: false;
    isLoaded: true;
    isErrored: false;
    data: T;
    props?: P | undefined;
}

interface ErroredState<P> {
    isLoading: false;
    isLoaded: false;
    isErrored: true;
    data: null;
    props?: P | undefined;
}
