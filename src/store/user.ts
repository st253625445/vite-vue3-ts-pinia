/*
 * @Author: Shao Tao
 * @Date: 2022-04-19 13:50:37
 * @LastEditTime: 2022-04-19 13:55:15
 * @LastEditors: Shao Tao
 * @Description:
 * @FilePath: \vite-vue3-ts-pinia\src\store\user.ts
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: 'shtao'
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        }
    }
});
