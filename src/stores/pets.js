import { defineStore } from "pinia";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export const usePetsStore = defineStore('pets', {
    state: () => ({
        pets: []
    }),
    getters: {
        getPets: (state) => {
            return state.pets
        }
    },
    actions: {
        async fetchPets() {
            const queryData = await getDocs(collection(db,"pets"));
            this.pets = queryData.docs.map((doc) => doc.data());
            // queryData.forEach((doc) => {
            //     console.log(doc.data());
            // })
        }
    },
});