export interface TaskModel{
    id: number,
    description: string,
    amount: number,
    date: Date,
    dateAdded: Date,
    categoryId: number,
    category: {
        id: number,
        categoryName: string
    }
}