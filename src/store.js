import {reactive} from 'vue'
import {products} from '/db.json'


export default{
    data(){
        return{
            products,
            
        }
    }

}

export const store = reactive({
    products
        
    
   
})

