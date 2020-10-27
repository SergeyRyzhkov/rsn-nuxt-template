import { BreadCrumb } from '@/models/core/BreadCrumb';
import { Module, VuexModule, VuexMutation, VuexAction } from 'nuxt-property-decorator'

@Module({
    name: 'AppStore',
    stateFactory: true,
    namespaced: true
})
export default class AppStore extends VuexModule {

    private breadCrumbList: BreadCrumb[] = [];

    @VuexMutation
    public setBreadCrumbList (breadCrumbList: BreadCrumb[]) {
        this.breadCrumbList = breadCrumbList;
    }

    @VuexAction
    public updateBreadCrumbList (breadCrumbList: BreadCrumb[]) {
        this.setBreadCrumbList(breadCrumbList);
    }

    public get breadCrumbs () {
        return this.breadCrumbList;
    }
}
