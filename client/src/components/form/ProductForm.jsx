import { useState, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import Input from '../../components/inputs/Input';
import Checkbox from '../../components/inputs/Checkbox';
import Button from '../../components/ui/Button';
import Form from './Form';

import { cloudinaryImageUpload } from '.././../utils/cloudinaryImageUpload';
import Preview from '../image/Preview';

const STEPS = {
  DESCRIPTION: 0,
  VARIANTS: 1,
  PRICE: 2,
};

const ProductForm = () => {
  const [formStep, setFormStep] = useState(STEPS.DESCRIPTION);
  // const [productImages, setProductImages] = useState([]);
  // const [imagePreview, setImagePreview] = useState([]);

  const [image, setImage] = useState([]);

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
      brand: '',
      gender: '',
      variants: [{ size: '', quantity: 1, color: '', images: [] }],
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
      images: [],
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

  const handleImageChange = (e, index) => {
    const files = e.target.files;
    const arrImg = [];

    for (let i = 0; i < files.length; i++) {
      const uploadImage = files[i];
      const previewImage = URL.createObjectURL(uploadImage);
      const imageFile = {
        upload: uploadImage,
        preview: previewImage,
      };
      arrImg.push(previewImage);
    }
    setValue(`variants.${index}.images`, arrImg);
  };

  const handleImageUpload = async (e) => {
    // console.log(getValues('variants'));
    const variants = getValues('variants');
    const variantImages = variants.map((variant) => variant.images);
    console.log(variantImages);
    // try {
    //   let arr = [];
    //   for (let i = 0; i < productImages.length; i++) {
    //     const data = await cloudinaryImageUpload(productImages[i]);
    //     arr.push(data);
    //   }
    //   const updatedVariants = control.getValues('variants').map((variant) => ({
    //     ...variant,
    //     images: [...variant.images, arr],
    //   }));

    //   control.setValue('variants', updatedVariants);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onSubmit = (data) => {
    if (formStep !== STEPS.PRICE) {
      return onNext();
    }
    const variants = getValues('variants');
    const arrImg = variants.map((variant) => variant.images);
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
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageChange(e, index)}
              />
              {/* {field.images.length > 0 && (
                <div className="variant-images">
                  {field.images.map((imageUrl) => (
                    <img
                      key={imageUrl}
                      src={imageUrl}
                      alt="Variant Image"
                      className="thumbnail"
                    />
                  ))}
                </div>
              )} */}
              {/* <Button label="Upload" onClick={handleImageUpload} /> */}
              {index > 0 && (
                <Button label="Remove Variant" onClick={removeVariant} />
              )}
            </section>
          );
        })}
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
      {/* {formBody} */}
      {/* <Button label="Add Product" onClick={handleSubmit(onSubmit)} /> */}
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </div>
  );
};

export default ProductForm;
