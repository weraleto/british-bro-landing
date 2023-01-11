export const state = () => ({
    showApplyForm: false
})

export const mutations = {
    setShowModal(state, val) {
        state.showApplyForm = val
    },
}