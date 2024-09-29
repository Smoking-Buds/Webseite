<template>
  <div class="bg-white dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl">
              Der beste Ort für <br />
              <span class="text-gray-600">Cannabis-Zubehör</span>
            </h1>

            <p class="mt-3 text-gray-700 dark:text-gray-400">
              Entdecken Sie unser umfangreiches Sortiment an hochwertigen Cannabis-Produkten und Zubehör. Bei uns
              finden Sie alles, was Sie brauchen!
            </p>

            <a href="/shop">
              <button
                class="w-full px-5 py-3 mt-6 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                Jetzt Einkaufen
              </button>
            </a>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="Cannabis Zubehör">
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-16 bg-gray-200 dark:bg-gray-700">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Unsere Funktionen</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Wir bieten eine Vielzahl von Funktionen, um Ihre Erfahrung zu
          verbessern.</p>
        <div class="flex flex-wrap justify-center mt-10">
          <div class="w-full max-w-xs p-6 mx-4 my-4 bg-green-100 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Benutzerfreundlich</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Unsere Plattform ist intuitiv und einfach zu navigieren.
            </p>
          </div>
          <div class="w-full max-w-xs p-6 mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Schneller Support</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Unser Support-Team steht Ihnen rund um die Uhr zur
              Verfügung.</p>
          </div>
          <div class="w-full max-w-xs p-6 mx-4 my-4 bg-green-100 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Vielfältige Auswahl</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Wählen Sie aus einer Vielzahl von Cannabis-Produkten und
              Zubehör.</p>
          </div>
          <div class="w-full max-w-xs p-6 mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Sichere Bezahlung</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Ihre Sicherheit liegt uns am Herzen.</p>
          </div>
          <div class="w-full max-w-xs p-6 mx-4 my-4 bg-green-100 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Schnelle Lieferung</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Wir liefern Ihre Bestellungen schnell und zuverlässig.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="lg:py-12 lg:flex lg:justify-center">
      <div
        class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
          <div class="h-64 bg-cover lg:h-full"
            style="background-image:url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
          </div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Tritt bei uns bei und <span class="text-blue-500">unterstütze uns beim Growen</span>
          </h2>

          <p class="mt-4 text-gray-500 dark:text-gray-300">
            Werden Sie Teil unserer Gemeinschaft und helfen Sie uns, unser Wachstum zu unterstützen. Gemeinsam können
            wir mehr erreichen und exklusive Vorteile genießen.
          </p>

          <div class="inline-flex w-full mt-6 sm:w-auto">
            <RouterLink to="/join"
              class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Jetzt Beitreten
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-gray-200 dark:bg-gray-700">
      <div class="container px-6 py-8 mx-auto">
        <h1 class="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Mitgliedschaftsangebote
        </h1>

        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Treten Sie unserem sozialen Club bei und genießen Sie exklusive Vorteile, Rabatte und Veranstaltungen.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Basis-Mitgliedschaft</p>

            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              $25
            </h2>

            <p class="font-medium text-gray-500 dark:text-gray-300">Pro Monat</p>

            <a href="/login">
              <button
                class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Jetzt Anmelden
              </button>
            </a>
          </div>

          <div class="w-full p-8 space-y-8 text-center bg-gray-600 rounded-lg">
            <p class="font-medium text-gray-200 uppercase">Premium-Mitgliedschaft</p>

            <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
              $50
            </h2>

            <p class="font-medium text-gray-200">Pro Monat</p>

            <a href="/login">
              <button
                class="w-full px-4 py-2 mt-10 tracking-wide text-gray-600 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Jetzt Anmelden
              </button>
            </a>
          </div>

          <div
            class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Exklusive Mitgliedschaft</p>

            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              $100
            </h2>

            <p class="font-medium text-gray-500 dark:text-gray-300">Pro Monat</p>

            <a href="/login">
              <button
                class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Jetzt Anmelden
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <section class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Über Uns</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Wir sind ein engagiertes Team von Cannabis-Enthusiasten, das
          sich der Bereitstellung hochwertiger Produkte und Dienstleistungen verschrieben hat. Unser Ziel ist es, Ihnen
          die besten Lösungen anzubieten, die Ihren Bedürfnissen entsprechen.</p>
        <RouterLink to="/about"
          class="mt-6 inline-block px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500">
          Mehr Erfahren
        </RouterLink>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-200 dark:bg-gray-700">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Kundenbewertungen</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Was unsere Kunden über uns sagen.</p>
        <div class="flex flex-wrap justify-center mt-10">
          <div class="w-full max-w-md p-6 mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <p class="text-gray-600 dark:text-gray-300">"Fantastischer Service und hochwertige Produkte! Ich bin sehr
              zufrieden mit meinem Einkauf bei Smoking Bud's."</p>
            <p class="mt-4 font-semibold">- Max Mustermann</p>
          </div>
          <div class="w-full max-w-md p-6 mx-4 my-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <p class="text-gray-600 dark:text-gray-300">"Die Auswahl ist riesig und die Qualität ist unübertroffen. Ich
              komme auf jeden Fall wieder!"</p>
            <p class="mt-4 font-semibold">- Maria Musterfrau</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Bereit, loszulegen?</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Schauen Sie sich unser Sortiment an und finden Sie das perfekte Produkt für sich!</p>
        <RouterLink to="/shop" class="mt-6 inline-block px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500">
          Jetzt Einkaufen
        </RouterLink>
      </div>
    </section>
  </div>
</template>
