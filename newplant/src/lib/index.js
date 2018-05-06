import aa from './newplant.vue'

const newplants = {
    install(Vue,options){
        Vue.component(aa.name,aa);
    }
}
if(typeof window!=="undefined"&&window.Vue){
    window.Vue.use(aa);
}
export default newplants