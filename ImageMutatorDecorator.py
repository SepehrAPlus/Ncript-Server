import random;
import cv2;
import ImageSavingLoading;
import DebugPrint as ___DEBUGLINE___;
import DebugPrint;




def image_mutator_decorator(function):
	def j(image_path):	
		debug_mileage = DebugPrint.rtnfdm()

		___DEBUGLINE___.dbg(title=f"passed image_path to decorated '{function.__name__}'", content=f"{image_path}", debug_mileage=debug_mileage,file_being_called_from=DebugPrint.rsffn())

		image_object = cv2.imread(image_path);
		image_object = cv2.cvtColor(image_object, cv2.COLOR_BGR2RGB);

		___DEBUGLINE___.announcing_dbg(msg="prepared image object to be fed into image mutator", debug_mileage=debug_mileage,file_being_called_from=DebugPrint.rsffn())


		mutated_image = function(image_object);

		___DEBUGLINE___.announcing_dbg(msg="image mutator done its job" , debug_mileage=debug_mileage,file_being_called_from=DebugPrint.rsffn())
		


		random_image_file_name = ImageSavingLoading.return_time_now_for_file_naming();
		random_image_file_name += ImageSavingLoading.FILE_NAME__FILE_EXTENSION__SEPRATOR_CAHR;
		random_image_file_name += ImageSavingLoading.STANDARD_IMAGE_SAVING_FORMAT_NAME_FOR_NAIMG_FILE;



		random_image_path = ImageSavingLoading.form_image_path_from_image_name(random_image_file_name);

		___DEBUGLINE___.dbg(title=f"random_iamge_path '{function.__name__}'", content=f"{random_image_path}", debug_mileage=debug_mileage,file_being_called_from=DebugPrint.rsffn())


		ImageSavingLoading.take_numpyarray_representing_image_and_save_it_in_given_path(image_object, random_image_path)
		return random_image_path;

	return j; 




