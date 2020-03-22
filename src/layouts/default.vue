<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer"
                             :clipped="$vuetify.breakpoint.lgAndUp"
                             app
                             fixed>
            <v-list dense>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Application</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <template v-for="item in items">
                    <v-list-group
                            v-if="item.children"
                            :key="item.text"
                            v-model="item.model"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon="">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(child, i) in item.children"
                                     :key="i"
                                     link
                                     @click="clicked(item,child)">
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item v-else
                                 :key="item.text"
                                 link
                                 @click="clicked(item)">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app
                   :clipped-left="$vuetify.breakpoint.lgAndUp"
                   color="pink"
                   dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title class="ml-0 text-center flex-fill">
                <span><strong>B</strong> hero</span>
            </v-toolbar-title>
            <!--<v-text-field flat
                          solo-inverted
                          hide-details
                          prepend-inner-icon="mdi-magnify"
                          label="Search"/>-->
            <!--class="hidden-sm-and-down"-->
            <!--<v-spacer/>-->
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
            <v-content>
                <slot></slot>
            </v-content>
        <v-btn bottom
               color="pink"
               dark
               fab
               fixed
               right
               @click="dialog = !dialog">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog v-model="dialog"
                  width="800px">
            <v-card>
                <v-card-title class="grey darken-2">
                    Create contact
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col class="align-center justify-space-between"
                               cols="12">
                            <v-row align="center"
                                   class="mr-0">
                                <v-avatar size="40px"
                                          class="mx-3">
                                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                         alt="">
                                </v-avatar>
                                <v-text-field placeholder="Name"/>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    prepend-icon="mdi-account-card-details-outline"
                                    placeholder="Company"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    placeholder="Job title"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-mail"
                                    placeholder="Email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    type="tel"
                                    prepend-icon="mdi-phone"
                                    placeholder="(000) 000 - 0000"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-text"
                                    placeholder="Notes"
                            />
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn
                            text
                            color="primary"
                    >More
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                            text
                            color="primary"
                            @click="dialog = false"
                    >Cancel
                    </v-btn>
                    <v-btn
                            text
                            @click="dialog = false"
                    >Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
export default {
    name: "default",
    props: {
        source: String,
    },
    data: () => ({
        dialog: false,
        drawer: null,
        items: [
            {icon: 'mdi-star', text: 'Intro', link: '/intro'},
            {icon: 'mdi-login', text: 'Login', link: {name : 'Login'}},
            {icon: 'mdi-contacts', text: 'Contacts'},
            {icon: 'mdi-history', text: 'Frequently contacted'},
            {icon: 'mdi-content-copy', text: 'Duplicates'},
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                text: 'Labels',
                model: true,
                children: [
                    {icon: 'mdi-plus', text: 'Create label'},
                ],
            },
            {
                icon: 'mdi-cvron-up',
                'icon-alt': 'mdi-chevron-down',
                text: 'More',
                model: false,
                children: [
                    {text: 'Import'},
                    {text: 'Export'},
                    {text: 'Print'},
                    {text: 'Undo changes'},
                    {text: 'Other contacts'},
                ],
            },
            {icon: 'mdi-math-compass', text: 'Settings'},
            {icon: 'mdi-message', text: 'Send feedback'},
            {icon: 'mdi-help-circle', text: 'Help'},
            {icon: 'mdi-cellphone-link', text: 'App downloads'},
            {icon: 'mdi-keyboard', text: 'Go to the old version'},
        ],
    }),
    methods: {
        clicked(item, child) {
            console.log(item.text)
            if (child) {
                console.log(child.text)
            }
            if (item.link) {
                this.$router.push(item.link)
            } else if (child.link) {
                this.$router.push(child.link)
            }
        }
    }
}
</script>

