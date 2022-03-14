const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false,
            },
            {
              name: "hello.html",
              isFolder: false,
            },
          ],
        },
        {
          name: "src",
          isFolder: true,
          items: [
            {
              name: "components",
              isFolder: true,
              items: [
                {
                  name: "Home",
                  isFolder: true,
                  items: [
                    {
                      name: "app.js",
                      isFolder: false,
                    },
                    {
                      name: "header.js",
                      isFolder: false,
                    },
                    {
                      name: "footer.js",
                      isFolder: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "root",
      isFolder: true,
      items: [
        {
          name: "public",
          isFolder: true,
          items: [
            {
              name: "public nested 1",
              isFolder: true,
              items: [
                {
                  name: "index.html",
                  isFolder: false,
                },
                {
                  name: "hello.html",
                  isFolder: false,
                },
              ],
            },
            {
              name: "src",
              isFolder: true,
              items: [
                {
                  name: "components",
                  isFolder: true,
                  items: [
                    {
                      name: "Home",
                      isFolder: true,
                      items: [
                        {
                          name: "app.js",
                          isFolder: false,
                        },
                        {
                          name: "header.js",
                          isFolder: false,
                        },
                        {
                          name: "footer.js",
                          isFolder: false,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default explorer;
