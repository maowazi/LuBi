import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from "./homeStore/homeStore";
import diaryStore from "./diaryStore/diaryStore";
import noteStore from "./noteStore/noteStore";
import remainStore from "./remainStore/remainStore";
import scheduleStore from "./scheduleStore/scheduleStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        homeStore,
        diaryStore,
        noteStore,
        remainStore,
        scheduleStore
    }
})
