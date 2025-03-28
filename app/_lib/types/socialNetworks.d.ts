declare module "socialNetworks" {
    interface SocialNetwork {
        url: string;
    };

    export type SocialNetworks = Record<string, SocialNetwork>
}
