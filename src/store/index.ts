
import { getModule } from 'nuxt-property-decorator'
import { Store } from 'vuex'
import AppStore from './AppStore'

export const actions = {
    nuxtServerInit (store: Store<any>) {
        //    getModule(AppStore, store).setBreadCrumbList([{ name: 'РАБОТАЕТ', link: 'main' }]);
    }
}


export const strict = false
