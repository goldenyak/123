export const config = {
  variants: [
    {
      name: 'default',
      steps: [
        {
          id: 2,
          showMultistepBar: true,
          content: [
            {
              type: 'header',
              title: 'Have you ever used any VPN before?',
            },
            {
              type: 'input-radio-element',
              title: 'yes',
              icon: 'icon-name',
              'redirect-to': '3',
            },
            {
              type: 'input-radio-element',
              title: 'no',
              icon: 'icon-name2',
              'redirect-to': '4',
            },
          ],
        },
        {
          id: 3,
          nextStep: '4',
          prevStep: '2',
          showMultistepBar: true,
          header: {
            title: 'What did not you like about other VPN services before?',
            description: 'HEADER DESCRIPTION',
          },
          content: [
            // {
            //   type: 'header',
            //   title: 'What did not you like about other VPN services before?',
            // },
            {
              type: 'input-checkbox-element',
              title: 'Was not working',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Too expensive',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Low connection speed',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: "Wasn't safe",
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Other',
              icon: 'icon-name',
            },
          ],
        },
        {
          id: 4,
          nextStep: '5',
          prevStep: '3',
          showMultistepBar: false,
          header: {
            title: 'With VPN Lumos you get a 75% faster online connection',
            subTitle: 'HEADER DESCRIPTION',
          },
          content: [
            // {
            //   type: 'header',
            //   title: 'With VPN Lumos you get a 75% faster online connection',
            // },
            // {
            //   type: 'description',
            //   title: 'Also, VPN Lumos :', 
            // },
            {
              type: 'input-info-element',
              title: 'Hides your IP and does not storage your data',
              icon: 'icon-name',
            },
            {
              type: 'input-info-element',
              title:
                'Helps watch videos that are not available in your country',
              icon: 'icon-name',
            },
            {
              type: 'input-info-element',
              title: 'Helps you access social networks and messengers',
              icon: 'icon-name',
            },
          ],
        },
        {
          id: 5,
          nextStep: '6',
          prevStep: '4',
          showMultistepBar: true,
          content: [
            {
              type: 'header',
              title:
                'Do you need to fix "Video is not available in your country" issue?',
            },
            {
              type: 'input-radio-element',
              title: 'yes',
              icon: 'icon-name',
              'redirect-to': '6'
            },
            {
              type: 'input-radio-element',
              title: 'no',
              icon: 'icon-name',
              'redirect-to': '7'
            },
          ],
        },
        {
          id: 6,
          nextStep: '7',
          showMultistepBar: true,
          content: [
            {
              type: 'header',
              title:
                'Do you need to fix "Video is not available in your country" issue?',
            },
            {
              type: 'input-checkbox-element',
              title: 'Netflix or other streaming',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Adult sites',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Social Networks',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Sport sites',
              icon: 'icon-name',
            },
            {
              type: 'input-checkbox-element',
              title: 'Other',
              icon: 'icon-name',
            },
          ],
        },
        {
          id: 7,
          nextStep: '7',
          showMultistepBar: true,
          content: [
            {
              type: 'header',
              title:
                'Do you need to use  Messengers which are not available in your country?',
            },
            {
              type: 'input-radio-element',
              title: 'yes',
              icon: 'icon-name',
              'redirect-to': '8',
            },
            {
              type: 'input-radio-element',
              title: 'no',
              icon: 'icon-name2',
              'redirect-to': '9',
            },
          ],
        },
      ],
    },
  ],
};
