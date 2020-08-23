/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
export default NormalizePhoneNumber = (value) => {
    if (!value) {
        return '';
    }
    const numberValue = value.replace(/[^\d]/g, '');
    if (numberValue.length <= 3) {
        return numberValue;
    }
    if (numberValue.length <= 7) {
        return `${numberValue.slice(0, 3)}.${numberValue.slice(3)}`;
    }
    return `${numberValue.slice(0, 3)}.${numberValue.slice(3, 6)}.${numberValue.slice(6, 10)}`;
};
