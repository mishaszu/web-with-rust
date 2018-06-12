use std::ffi::CString;
use std::os::raw::c_char;

#[no_mangle]
pub extern fn hello() -> String {
    "hello world!".to_string()
}

#[no_mangle]
pub extern fn add() -> u32 {
    1 + 1
}
