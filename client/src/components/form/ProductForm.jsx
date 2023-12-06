import { useState, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Trash } from 'lucide-react';

import Input from '../../components/inputs/Input';
import Checkbox from '../../components/inputs/Checkbox';
import Button from '../../components/ui/Button';
import Form from './Form';

import { cloudinaryImageUpload } from '.././../utils/cloudinaryImageUpload';
import Preview from '../image/Preview';

const STEPS = {
  DESCRIPTION: 0,
  VARIANTS: 1,
  IMAGES: 2,
  PRICE: 3,
};

const ProductForm = () => {
  const [formStep, setFormStep] = useState(STEPS.DESCRIPTION);
  const [productImages, setProductImages] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      category: '',
      images: [],
      brand: '',
      gender: '',
      variants: [{ size: '', quantity: 1, color: '' }],
      description: '',
      price: 1,
      stock: 1,
      isFeatured: false,
    },
  });

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const { fields, append, remove } = useFieldArray({
    name: 'variants',
    control,
  });

  const addVariant = () => {
    append({
      size: '',
      quantity: 1,
      color: '',
    });
  };

  const removeVariant = (index) => {
    remove(index);
  };

  const onNext = () => {
    setFormStep((step) => step + 1);
  };

  const onBack = () => {
    setFormStep((step) => step - 1);
  };

  const actionLabel = useMemo(() => {
    if (formStep === STEPS.PRICE) {
      return 'Create';
    }
    return 'Next';
  }, [formStep]);

  const secondaryActionLabel = useMemo(() => {
    if (formStep === STEPS.DESCRIPTION) {
      return undefined;
    }
    return 'Back';
  }, [formStep]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const arrImg = [...productImages];

    for (let i = 0; i < files.length; i++) {
      const uploadImage = files[i];
      const previewImage = URL.createObjectURL(uploadImage);
      const imageFile = {
        upload: uploadImage,
        preview: previewImage,
      };
      arrImg.push(imageFile);
    }
    setProductImages(arrImg);
  };

  // const removeImage = (index) => {
  //   const newImg = images.splice(index, 1);
  //   setImages(newImg);
  // };

  const handleImageUpload = async () => {
    const uploadedImages = [];
    try {
      for (let i = 0; i < productImages.length; i++) {
        const imageFile = productImages[i].upload;
        const data = await cloudinaryImageUpload(imageFile);
        uploadedImages.push(data);
      }
      setValue('images', uploadedImages);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    if (formStep !== STEPS.PRICE) {
      return onNext();
    }
    console.log(data);
  };

  let formBody = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="Name"
        type="text"
        disabled={isSubmitting}
        register={register}
        options={{
          required: {
            value: true,
            message: 'Product name cannot be empty',
          },
        }}
        errors={errors}
      />
      <Input
        id="category"
        label="Category"
        type="text"
        disabled={isSubmitting}
        register={register}
        options={{
          required: {
            value: true,
            message: 'Category cannot be empty',
          },
        }}
        errors={errors}
      />
      <Input
        id="brand"
        label="Brand"
        type="text"
        disabled={isSubmitting}
        register={register}
        options={{
          required: {
            value: true,
            message: 'Brand cannot be empty',
          },
        }}
        errors={errors}
      />
      <Input
        id="gender"
        label="Gender"
        type="text"
        disabled={isSubmitting}
        register={register}
        options={{
          required: {
            value: true,
            message: 'Gender cannot be empty',
          },
        }}
        errors={errors}
      />
      <Input
        id="description"
        label="Description"
        type="text"
        disabled={isSubmitting}
        register={register}
        options={{
          required: {
            value: true,
            message: 'Description cannot be empty',
          },
        }}
        errors={errors}
      />
    </div>
  );

  if (formStep === STEPS.VARIANTS) {
    formBody = (
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <span>Variants</span>
          <Button label="Add Variant" onClick={addVariant} />
        </div>

        {fields.map((field, index) => {
          return (
            <section key={field.id} className="flex flex-col gap-4">
              <Input
                id={`variants.${index}.size`}
                label="Size"
                type="text"
                options={{
                  required: { value: true, message: 'Size is required' },
                }}
                disabled={isSubmitting}
                register={register}
                errors={errors}
              />
              <Input
                id={`variants.${index}.quantity`}
                label="Quantity"
                type="number"
                options={{
                  valueAsNumber: true,
                  required: { value: true, message: 'Quantity is required' },
                }}
                disabled={isSubmitting}
                register={register}
                errors={errors}
              />
              <Input
                id={`variants.${index}.color`}
                label="Color"
                type="text"
                options={{
                  required: { value: true, message: 'Color is required' },
                }}
                disabled={isSubmitting}
                register={register}
                errors={errors}
              />
              {index > 0 && (
                <Button label="Remove Variant" onClick={removeVariant} />
              )}
            </section>
          );
        })}
      </div>
    );
  }

  if (formStep === STEPS.IMAGES) {
    formBody = (
      <div>
        <span className="text-2xl">Upload images here</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        {productImages.length > 0 && (
          <div className="flex gap-6 justify-center">
            {productImages.map((image, index) => (
              <div className="relative" key={index}>
                <img
                  src={image.preview}
                  alt="Image"
                  key={index}
                  className="h-[280px] w-[210px] object-cover"
                />
                <Trash
                  className="absolute h-4 w-4 top-4 right-4"
                  // onClick={removeImage(index)}
                />
              </div>
            ))}
          </div>
        )}
        <Button label={'Upload'} onClick={handleImageUpload} />
      </div>
    );
  }

  if (formStep === STEPS.PRICE) {
    formBody = (
      <div className="flex flex-col gap-4">
        <Input
          id="price"
          label="Price"
          type="number"
          options={{
            valueAsNumber: true,
            required: { value: true, message: 'Price is required' },
          }}
          disabled={isSubmitting}
          register={register}
          errors={errors}
        />
        <Input
          id="stock"
          label="Stock"
          type="number"
          options={{
            valueAsNumber: true,
            required: { value: true, message: 'Stock is required' },
          }}
          disabled={isSubmitting}
          register={register}
          errors={errors}
        />
        <Checkbox
          id="isFeatured"
          label="Feature Product"
          register={register}
          options={{ type: 'boolean' }}
        />
      </div>
    );
  }

  return (
    <div>
      <Form
        title={'Create a new Product'}
        body={formBody}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={onBack}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default ProductForm;
