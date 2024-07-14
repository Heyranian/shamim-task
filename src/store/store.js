import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useStore = create((set) => ({
    items: [
        { id: uuidv4(), name: 'Ali', score: 90, age: 5 },
        { id: uuidv4(), name: 'Reza', score: 80, age: 3 },
        { id: uuidv4(), name: 'Sara', score: 85, age: 2 },
        { id: uuidv4(), name: 'Maryam', score: 95, age: 4 },
        { id: uuidv4(), name: 'Hossein', score: 70, age: 1 },
        { id: uuidv4(), name: 'Fatemeh', score: 75, age: 6 },
        { id: uuidv4(), name: 'Mohammad', score: 60, age: 2 },
    ],
    selectedItems: [],
    sortedItems: [],
    isSortedByAge: false,
    toggleSelection: (item) =>
        set((state) => ({
            selectedItems: state.selectedItems.includes(item)
                ? state.selectedItems.filter((i) => i !== item)
                : [...state.selectedItems, item],
        })),
    moveSelectedItems: () =>
        set((state) => {
            const sorted = [...state.selectedItems].sort((a, b) => b.score - a.score);
            return {
                sortedItems: sorted,
                selectedItems: [],
            };
        }),
    toggleSort: () =>
        set((state) => {
            const isSortedByAge = !state.isSortedByAge;
            const sorted = [...state.sortedItems].sort((a, b) =>
                isSortedByAge ? a.age - b.age : b.score - a.score
            );
            return {
                sortedItems: sorted,
                isSortedByAge: isSortedByAge,
            };
        }),
    reset: () =>
        set({
            selectedItems: [],
            sortedItems: [],
            isSortedByAge: false,
        }),
}));

export default useStore;
