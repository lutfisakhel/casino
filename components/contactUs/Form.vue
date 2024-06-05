<template>
  <Form id="contact-us" name="contact-us" data-netlify="true" data-netlify-honeypot="bot-field"
    :validation-schema="schema" @submit="onFormSubmit" v-slot="{ meta, isSubmitting }" :validateOnMount="false">
    <input type="hidden" name="form-name" value="contact-us" />
    <div>
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
        <div class="sm:col-span-2">
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Your
            name</label>
          <div class="mt-2.5">
            <Field as="input" type="text" name="name" id="name" autocomplete="full-name" v-model="formData.name"
              maxlength="40"></Field>
            <ErrorMessage name="name" v-if="meta.touched" v-slot="{ message }">
              <span role="alert"> Please enter your name </span>
            </ErrorMessage>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Email</label>
          <div class="mt-2.5">
            <Field as="input" type="email" name="email" id="email" autocomplete="email" v-model="formData.email" />
            <ErrorMessage name="email" v-if="meta.touched" v-slot="{ message }">
              <span role="alert"> Please enter your email </span>
            </ErrorMessage>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="message"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Message</label>
          <div class="mt-2.5">
            <Field as="textarea" name="message" id="message" rows="5" v-model="formData.message" />
            <ErrorMessage name="message" v-if="meta.touched" v-slot="{ message }">
              <span role="alert"> Please enter your message </span>
            </ErrorMessage>
          </div>
        </div>

        <BaseAlert variant="danger" v-if="errorMessage" class="!mb-0 sm:col-span-3">
          <ul>
            <li>
              Oops, something went wrong. Please email us at
              <a href="mailto:laith@aividpro.com">
                laith@aividpro.com </a>.
              <!-- {{ errorMessage }} -->
            </li>
          </ul>
        </BaseAlert>
        <BaseAlert variant="success" v-else-if="isSuccess" class="!mb-0 sm:col-span-3">
          <ul>
            <li>Success! Thanks for contacting us.</li>
          </ul>
        </BaseAlert>
      </div>

      <div class="mt-8 flex justify-end">
        <button type="submit" class="btn btn-primary" @click="isSuccess = false; errorMessage = null;"
          :disabled="isSubmitting || !meta.valid || !meta.touched">
          Send message
          <Icon name="lucide:loader-2" class="inline ml-1 animate-spin w-5 h-5 opacity-95" v-if="isSubmitting" />
        </button>
      </div>
    </div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";

configure({
  validateOnInput: true,
  validateOnBlur: true,
  validateOnModelUpdate: true,
  validateOnChange: true,
});

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

// Schema for the form
const schema = {
  name: { min: 3, max: 40, required: true },
  email: { required: true, email: true },
  message: { min: 5, max: 500, required: true },
};

const formData = reactive({
  name: null,
  email: null,
  message: null,
});

const emit = defineEmits(["success"]);

const errorMessage = ref(null);
const isSuccess = ref(false);

// Method to encode form data
const encode = (data) => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

// handle the form submit
const onFormSubmit = async () => {
  console.log("Form submitted!", formData);
  errorMessage.value = null;

  // POST to Netlify
  try {
    const data = await $fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-us",
        ...formData
      }),
    });

    isSuccess.value = true;
    emit("success", true);
  } catch (e) {
    console.log("Error sending contact us message.", e);
    errorMessage.value = e;
  }
};
</script>

<style scoped>
input,
textarea {
  @apply max-w-none;
}
</style>