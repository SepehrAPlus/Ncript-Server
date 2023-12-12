import os;
import time;

def return_self_file_file_name():
	return os.path.split(__file__)[1];

def rsffn():return return_self_file_file_name()


def dbg(title, content, debug_mileage ,file_being_called_from):
	print("__________________<DEBUG>________________________")
	print(f"title:{title}");
	print(f"from:{file_being_called_from}");
	print(f"milage:{debug_mileage}");
	print("content:");
	print(content);


def announcing_dbg(msg, debug_mileage, file_being_called_from):
	print("__________________<DEBUG>________________________")
	print(f"{msg}");
	print(f"from:{file_being_called_from}");
	print(f"milage:{debug_mileage}");

def kdbg(title, keys_and_values:dict, debug_mileage, file_being_called_from):
	print("__________________<DEBUG>________________________")
	print(f"title:{title}");
	print(f"from:{file_being_called_from}");
	print(f"milage:{debug_mileage}");
	print("------")
	for k,v in keys_and_values.items():
		print(f"{k}:{v}");



def return_time_now_for_debug_miling():
	unix_now = time.time();
	as_str = unix_now.__str__(); 
	as_str = as_str.replace(".", "_____")
	return as_str
	

def rtnfdm():return return_time_now_for_debug_miling()