export const useFormatNumber = (amount) => {
    return new Intl.NumberFormat('id-ID').format(amount);
}