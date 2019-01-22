/* 
    action types
*/
export const LOGGING_IN = 'LOGGING_IN'
export const LOGGING_OUT ='LOGGING_OUT'

export function loggingIn(status){
    return {type:LOGGING_IN,status}
}
export function loggingOut(status){
    return {type:LOGGING_OUT,status}
}