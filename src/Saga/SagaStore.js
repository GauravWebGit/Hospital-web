function* WatchAll(){
    yield all([watchAuth()]);
}