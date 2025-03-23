interface VisualizationUrls {
    original_url: string;
    heatmap_url: string;
    overlay_url: string;
}

export interface ResultsSectionProps {
    result: {
        prediction: string;
        confidence: number;
        visualization_urls: VisualizationUrls;
    };
}


export interface ResultType {
    prediction: string;
    confidence: number;
    visualization_urls: VisualizationUrls;
}
