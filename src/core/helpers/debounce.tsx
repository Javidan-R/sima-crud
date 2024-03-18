export const debounce = (func: any, wait: number) => {
    let timeout: any;
    return function executedFunction(...args: any) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};