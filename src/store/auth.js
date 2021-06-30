import axios from 'axios';
export default {
    namespaced:true,
    state: {
        tocken:null,
        username:null
    },
    mutations: {
        SET_TOCKEN({state,token}){
            state.token=token
        }
    },
    actions: {
        async signIn({commit},credentials){
            var response= await axios.post("https://localhost:44334/api/Auth/login",credentials);
          console.log(response);
        
          await axios.get("https://localhost:44334/api/Customer",{
              headers:{
                  'Authorization':'Bearer'+response.tocken
              }
          });
          commit('SET_TOCKEN',response.token);
        }
    },
    modules: {},
}