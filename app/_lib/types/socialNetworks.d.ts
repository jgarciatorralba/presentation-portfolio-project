declare module "socialNetworks" {
    interface SocialNetwork {
        url: string;
    };

    type SocialNetworks = Record<string, SocialNetwork>
}
