<script setup>
import { Field, Form, useField, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required()
})

const { value: email } = useField('email');
const { value: name } = useField('name');
const { value: message } = useField('message');


const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const submit = () => {

    // loading
    const btn = document.getElementById('btn-submit');
    btn.innerHTML = 'Sending...';
    btn.disabled = true;

   emailjs.send(serviceId, templateId, {
       from_name: name.value,
       message: message.value,
       reply_to: email.value
   }, publicKey)
   .then(() => {
        notyf.success({
            message: 'Message sent successfully',
            duration: 1500,
            position: {
                x: 'right',
                y: 'top',
            }
        });

         // reset
        name.value = '';
        email.value = '';
        message.value = '';
        btn.innerHTML = 'Submit <i class="fa-solid fa-paper-plane ms-2"></i>';
        btn.disabled = false;
   })
    .catch(() => {
        notyf.error({
            message: 'Failed to send message',
            duration: 1500,
            position: {
                x: 'right',
                y: 'top',
            }
        });

         btn.innerHTML = 'Submit <i class="fa-solid fa-paper-plane ms-2"></i>';
         btn.disabled = false;
    });
}

</script>

<template>
         <!-- get In Touch -->
    <section id="get-in-touch">
        <div class="container py-5 d-flex flex-column justify-content-center align-items-center">
            <p class="fs-2 text-center mb-5">Get In Touch</p>
            <Form id="form" class="col-12 col-lg-12" @submit="submit" :validation-schema="schema">
                <div class="d-flex flex-column">
                    <div class="form-group mb-2">
                        <Field type="text" name="name" placeholder="Name" class="form-control" v-model="name" />
                        <ErrorMessage name="name" class="text-danger" />
                    </div>
                    <div class="form-group mb-2">
                        <Field type="email" name="email" placeholder="Email" class="form-control" v-model="email" />
                        <ErrorMessage name="email" class="text-danger" />
                    </div>
                    <div class="form-group">
                        <Field as="textarea" placeholder="Place your message here ..." name="message" rows="10" class="form-control input" v-model="message"></Field>
                        <ErrorMessage name="message" class="text-danger" />
                    </div>
                </div>
                <button class="btn mt-3 btn-outline-light" id="btn-submit"> Submit <i class="fa-solid fa-paper-plane ms-2"></i></button>

                <div id="social" class="mt-4 d-flex gap-3">
                    <a href="#" class="box-dark box-small rounded d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" class="box-dark box-small rounded d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="box-dark box-small rounded d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-solid fa-envelope"></i></a>
                    <a href="#" class="box-dark box-small rounded d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-github"></i></a>
                </div>

                <p class="mt-2 fs-1 fw-bold">Let's talk for something special</p>
                <p class="my-3 fs-4">Looking forward to collaborating on exciting projects. Feel free to reach out for any inquiries or opportunities.</p>
            </Form>
        </div>  
    </section>
</template>