import ImageMutatorDecorator;



@ImageMutatorDecorator.image_mutator_decorator
def do_someyhing_random_with_image(image_object):
	h, w, c = image_object.shape;
	for y in range(h):
		for x in range(w):
			image_object[y,x]=(image_object[y,x]^8)%254;

	return image_object;



print(do_someyhing_random_with_image(R"C:\Users\User05\Desktop\NcriptServer\TEST_IMAGE.jpg"))