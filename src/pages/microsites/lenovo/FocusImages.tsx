import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Loader2, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FocusImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
  sort_order: number;
}

export default function FocusImages() {
  const [images, setImages] = useState<FocusImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<FocusImage | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('lenovo_focus_images')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching focus images:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string | null) => {
    switch (category) {
      case 'strategy': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'framework': return 'bg-green-100 text-green-800 border-green-200';
      case 'delivery': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'implementation': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'value': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'metrics': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading focus images...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lenovo Focus Images - Troy Latter</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Strategic visualisations and frameworks supporting Lenovo's ANZ DaaS initiative" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Lenovo Focus Images
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic visualisations and frameworks supporting Lenovo's ANZ DaaS initiative. 
            Click on any image to view it in detail with full commentary.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {image.title}
                  </h3>
                  {image.category && (
                    <Badge 
                      variant="outline" 
                      className={`ml-2 flex-shrink-0 ${getCategoryColor(image.category)}`}
                    >
                      {image.category}
                    </Badge>
                  )}
                </div>
                
                {image.description && (
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <p className="text-lg mb-2">No focus images available</p>
              <p className="text-sm">Check back later for strategic visualisations and frameworks.</p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 pb-4 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-xl font-semibold mb-2">
                      {selectedImage.title}
                    </DialogTitle>
                    {selectedImage.category && (
                      <Badge 
                        variant="outline" 
                        className={getCategoryColor(selectedImage.category)}
                      >
                        {selectedImage.category}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedImage(null)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="flex-1 overflow-auto">
                {/* Full Size Image */}
                <div className="relative bg-muted">
                  <img
                    src={selectedImage.image_url}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
                
                {/* Description */}
                {selectedImage.description && (
                  <div className="p-6">
                    <h4 className="font-medium mb-3">Commentary</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}