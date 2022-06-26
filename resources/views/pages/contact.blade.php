<!DOCTYPE html>
<html lang="en-US">
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
   <head>
      <!-- <link rel="stylesheet" href="https://www.tatvasoft.com/public/css/contact.css"> -->
      <link rel="stylesheet" href="{{asset('/css/contact.css')}}">
      <link rel="stylesheet" href="{{asset('/css/custom.css')}}">
       <title>PrajayaSolutions - Contact US</title>
      <meta name="description" content="Contact US now to develop your software application projects." />
      <meta name="keywords" content="software development company India, web development, .net, java, php, mobile apps" />
      <link rel="canonical" href="contact.html" />
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:locale" content="en_US">
      <meta property="og:type" content="Website">
      <meta property="og:site_name" content="PrajayaSolutions">
      <meta property="og:title" content="Software Development Company - PrajayaSolutions" />
      <meta property="og:image:alt" content="Software Development Company">
      <meta property="og:image:width" content="1200">
      <meta property="og:image:height" content="600">
      <meta name="twitter:title" content="Software Development Company - PrajayaSolutions">
       <meta name="twitter:card" content="summary_large_image">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="theme-color" content="#ffffff">
      <meta name="ahrefs-site-verification" content="b415df08e231a8969f1b8cd41b382d79aad7b391549daefe58dfe03e3df57dd0">
   </head>
   <body>
       <div class="main-site-wrapper" data-medium="" data-ref="career.html">
         <div class="cookie-bar">
            <div class="container">
               <div class="cookie-bar-inner">
                  <p>By continuing to use this website you agree to our <a href="privacy-statement.html" title="Cookie Policy"> Cookie Policy.</a>
                     <a href="javascript:void(0);" class="border-btn" id="cookie-button">I Agree</a>
                  </p>
               </div>
            </div>
         </div>
               @include('layout.header')
         <main>
            <div class="contact-us-wrapper landing-page-wrapper">
               <section class="tatvasoft-inner-page-banner">
                  <div class="webp-images tatvasoft-desktop-banner tatvasoft-inner-banner" style="background-image: url('https://www.tatvasoft.com/public/images/contact-banner.webp');" data-webp="https://www.tatvasoft.com/public/images/contact-banner.jpg">
                     <img src="https://www.tatvasoft.com/public/images/contact-banner.webp" alt="contact-banner" class="webp-images img-webp hide-image" data-webp="https://www.tatvasoft.com/public/images/contact-banner.jpg">
                  </div>
                  <div class="webp-images tatvasoft-mobile-banner tatvasoft-inner-banner" style="background-image: url('https://www.tatvasoft.com/public/images/mobile-banners/contact-banner-mob.webp');" data-webp="https://www.tatvasoft.com/public/images/mobile-banners/contact-banner-mob.jpg">
                     <img src="https://www.tatvasoft.com/public/images/mobile-banners/contact-banner-mob.webp" alt="contact-banner" class="webp-images img-webp hide-image" data-webp="https://www.tatvasoft.com/public/images/mobile-banners/contact-banner-mob.jpg">
                  </div>
                  <div class="container">
                     <div class="contact-banner-wrapper">
                        <div class="left-col inner-col">
                           <div class="left-col-wrapper">
                              <div class="heading-block">
                                 <h1>Contact us</h1>
                                 <p>Please send us your requirements and we'll get back to you at the earliest.</p>
                              </div>
                              <div class="content-block">
                                 <ul class="inquiry-listing">
                                    <li>
                                       <span>Inquiry: info@prajayasolutions.com </span>
                                      </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="right-col inner-col">
                           <div class="contact-form-wrapper">
                              <div class="form-wrapper">
                                 <div class="title-wrapper">
                                    <h2>Get in touch</h2>
                                 </div>
                                 <form autocomplete="on" enctype="multipart/form-data" action="{{URL('/scripts/contact.php')}}"  class="contact-form" method="POST">
                                    <div class="form-group name-div">
                                       <label style="display: none;" for="name">Name</label>
                                       <input type="text" name="name_contact" id="name_contact" class="form-control your-name" onkeypress="return isAlfa(event)" placeholder="Name">
                                       <span class="displayNone cfValidationMessage" id="message_name">Please enter your Name</span>
                                    </div>
                                    <div class="form-group email-div">
                                       <label style="display: none;" for="mail">Email Address</label>
                                       <input type="email" name="email_contact" id="mail" value="" class="form-control your-email" placeholder="Email Address" require>
                                       <span class="displayNone cfValidationMessage" id="message_Email">Please enter your Email Address</span>
                                    </div>
                                    <div class="form-group number-div">
                                       <label style="display: none;" for="phnumber_contact">Phone Number</label>
                                       <input type="text" name="Phone_Number" id="phnumber_contact" value="" class="form-control your-number" placeholder="Phone Number" onkeypress="return isNumberValidate(event)" maxlength="20">
                                       <span class="displayNone cfValidationMessage" id="message_name">Phone number is required</span>
                                    </div>
                                   
                                    <div class="form-group desc-div">
                                       <label style="display: none;" for="description">Message</label>
                                       <textarea id="description" class="form-control" maxlength="500" name="description_Contact" placeholder="Description"></textarea>
                                       <span class="displayNone cfValidationMessage" id="message_name">Please enter Description</span>
                                    </div>
                                    <div class="btn-wrapper">
                                       <div class="submit-btn-wrapper">
                                          <button type="submit" class="btn border-btn" id="submit">Submit</button>
                                          <span class="ajax-loader"></span>
                                       </div>
                                       <div class="main-error-message-wrapper">
                                          <span class="contact-success-text" style="display:none"><strong>Thanks for Contacting Us!</strong>We will get back to you as soon as possible.</span>
                                          <span class="contact-error-text" style="display:none">There was an error trying to send your message. Please try again later.</span>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section class="mobile-contact-us-section common-style">
                  <div class="container"></div>
               </section>
            </div>
         </main>
      </div>
      @include('layout.footer')
      <script src="{{asset('js/contact-vendor.js')}}"></script>
      <script src="{{asset('js/mainf700.js')}}"></script>
      </div>
      <!-- <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"720cfa034aa20e0c","version":"2022.6.0","r":1,"token":"c25d90ee3c944e8a90e14624035eef8e","si":100}' crossorigin="anonymous"></script> -->
   </body>
   <!-- Mirrored from www.tatvasoft.com/contact by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 25 Jun 2022 10:28:49 GMT -->
</html>
<!-- <script src='../www.google.com/recaptcha/api550e.js?render=6LdYKK4ZAAAAAJ7TVbzC3hj8sMgWqHxWphHB-2kV' async defer></script> -->