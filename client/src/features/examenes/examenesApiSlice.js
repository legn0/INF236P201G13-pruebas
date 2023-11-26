import {
    createSelector,
    createEmptyAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/appSlice";

const examenesAdapter = createEmptyAdapter({})

const initialState = examenesAdapter.getInitialState()

export const examenesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getExamenes: builder.query({
            query: () => '/examenes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedExamenes = responseData.map(examen => {
                    examen.ide = examen._id
                    return examen
                });
                return examenesAdapter.setAll(initialState, loadedExamenes)
            },
            providesTags: (result, error, arg) => {
                if (result?.id) {
                    return [
                        {type: 'Examen', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'Examen', id}))
                    ]
                } else return [{type: 'Examen', id: 'LIST'}]
            }
        }),
        getExamenesFecha: builder.query({
            query: (id) => ({url: `/examenes/${id}`})
        })
    }),
})

export const {
    useGetExamenesQuery,
} = examenesApiSlice

export const selectExamenesResult = examenesApiSlice.endpoints.getExamenes.select()

const selectExamenesData = createSelector(
    selectExamenesResult,
    examenesResult => examenesResult.data
)

export const {
    selectAll: selectAllExamenes,
    selectById: selectExamenById,
    selectIds: selectExamenIds
} = examenesAdapter.getSelectors(state => selectExamenesData(state) ?? initialState)