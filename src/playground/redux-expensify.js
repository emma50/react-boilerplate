import { createStore, combineReducers } from "redux"
import uuid from "uuid"

// Action generators
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})


// Expense default state
const expensesReducerDefaultState = []

// Expense reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return  [ ...state,action.expense]
        case "REMOVE_EXPENSE":
            // return  state.slice(!action.expense, 2)
            return state.filter(({ id }) => id !== action.id)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default:
            return state
    }
}


// Filter default state
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

// Filter reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT": 
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE": 
            return {
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE": 
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE": 
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    const filterExpenses = expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    })

    const sortExpenses = filterExpenses.sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1
        }
    })

    return sortExpenses
}

// Store creation
const store = createStore(
    // Register reducers in combineReducer
    combineReducers({ 
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 200, createdAt: 100}))
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 600, createdAt: 200}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 800 }))

store.dispatch(setTextFilter("e"))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1365))
// store.dispatch(setEndDate())

