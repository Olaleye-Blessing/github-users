export const sortAndSliceObject = (
    object,
    propertyUseToSort,
    startSlice,
    endSlice
) => {
    return Object.values(object)
        .sort((a, b) => b[propertyUseToSort] - a[propertyUseToSort])
        .slice(startSlice, endSlice);
};
